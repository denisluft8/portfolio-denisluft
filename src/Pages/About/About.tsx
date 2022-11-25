import { AboutContainer, AboutStyled, ProfileStyled } from "./AboutStyled";
import img from "../../assets/profile.png";

export const About = () => {
  return (
    <AboutStyled id="about">
      <AboutContainer>
        <ProfileStyled src={img} />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          dignissim sem sed nulla blandit malesuada. Nulla at pharetra dui.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Aliquam varius, enim volutpat aliquam
          vestibulum, ligula est interdum nibh, vel volutpat magna erat sed
          ligula. Mauris suscipit tellus eu sagittis rhoncus. Nam cursus magna
          id ornare fermentum. Suspendisse id eros nulla. Sed quis aliquet
          lacus. Fusce pulvinar pulvinar viverra. Proin sit amet ante enim.
          Vivamus elementum, risus id sodales pellentesque, nulla nulla
          efficitur lacus, sit amet rutrum neque augue blandit odio.
        </p>
      </AboutContainer>
    </AboutStyled>
  );
};
