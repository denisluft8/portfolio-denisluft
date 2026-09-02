import Foundation
import Vision
import AppKit
import CoreGraphics

// Recorta um retrato quadrado a partir do rosto detectado, com headroom acima
// (o boné) e espaço na direção do olhar. Coordenadas em pixels, origem no topo.
let inPath = CommandLine.arguments[1]
let outPath = CommandLine.arguments[2]
let outSize = CGFloat(Int(CommandLine.arguments.count > 3 ? CommandLine.arguments[3] : "480") ?? 480)
// Ajustes opcionais de enquadramento:
//   arg 4 = fracao da altura ocupada pelo rosto (menor = mais afastado)
//   arg 5 = altura dos olhos no quadro (0.5 = centro vertical)
//   arg 6 = deslocamento horizontal em fracao do lado (+ move o rosto p/ esquerda)
let faceRatio = CGFloat(Double(CommandLine.arguments.count > 4 ? CommandLine.arguments[4] : "0.38") ?? 0.38)
let eyeLine = CGFloat(Double(CommandLine.arguments.count > 5 ? CommandLine.arguments[5] : "0.44") ?? 0.44)
let shiftX = CGFloat(Double(CommandLine.arguments.count > 6 ? CommandLine.arguments[6] : "0") ?? 0)

guard let img = NSImage(contentsOfFile: inPath),
      let tiff = img.tiffRepresentation,
      let rep0 = NSBitmapImageRep(data: tiff),
      let cg = rep0.cgImage else { fatalError("nao carregou a imagem") }

let W = CGFloat(cg.width), H = CGFloat(cg.height)
let req = VNDetectFaceRectanglesRequest()
try VNImageRequestHandler(cgImage: cg, options: [:]).perform([req])
guard let face = req.results?.first else { fatalError("nenhum rosto detectado") }

let b = face.boundingBox
let fx = b.minX * W, fw = b.width * W, fh = b.height * H
let fyTop = (1 - b.maxY) * H
let faceCenterX = fx + fw / 2

// O rosto deve ocupar ~43% da altura do quadro: sobra espaço para o boné acima
// e para os ombros abaixo.
var side = min(fh / faceRatio, min(W, H))

// Olhos a ~40% do topo do quadro (regra dos terços aplicada a retrato)
let eyeY = fyTop + fh * 0.42
var top = eyeY - side * eyeLine

var left = faceCenterX - side / 2 + side * shiftX

// Mantém o recorte dentro da imagem
left = max(0, min(left, W - side))
top = max(0, min(top, H - side))
if side > W { side = W }
if side > H { side = H }

let rect = CGRect(x: left.rounded(), y: top.rounded(), width: side.rounded(), height: side.rounded())
print("rosto: x=\(Int(fx)) y=\(Int(fyTop)) w=\(Int(fw)) h=\(Int(fh))")
print("recorte: \(Int(rect.minX)),\(Int(rect.minY)) \(Int(rect.width))x\(Int(rect.height))")

guard let cropped = cg.cropping(to: rect) else { fatalError("crop falhou") }

// Redimensiona para o tamanho final
let ctx = CGContext(data: nil, width: Int(outSize), height: Int(outSize),
                    bitsPerComponent: 8, bytesPerRow: 0,
                    space: CGColorSpaceCreateDeviceRGB(),
                    bitmapInfo: CGImageAlphaInfo.noneSkipLast.rawValue)!
ctx.interpolationQuality = .high
ctx.draw(cropped, in: CGRect(x: 0, y: 0, width: outSize, height: outSize))
guard let scaled = ctx.makeImage() else { fatalError("resize falhou") }

let dest = CGImageDestinationCreateWithURL(
    URL(fileURLWithPath: outPath) as CFURL, "public.jpeg" as CFString, 1, nil)!
CGImageDestinationAddImage(dest, scaled, [kCGImageDestinationLossyCompressionQuality: 0.86] as CFDictionary)
CGImageDestinationFinalize(dest)
print("salvo: \(outPath)")
