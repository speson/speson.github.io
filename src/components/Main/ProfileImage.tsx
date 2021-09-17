import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import Img, { FluidObject } from 'gatsby-image';

export interface ProfileImageProps {
  profileImage: FluidObject;
}

// // 내 프로필 이미지
// const PROFILE_IMAGE_LINK =
//   "https://avatars.githubusercontent.com/u/24629040?s=460&u=0bb3411f25c0e1c5d25d753fc648739367cb7032&v=4";

const ProfileImageWrapper = styled(Img)`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

const ProfileImage: FunctionComponent<ProfileImageProps> = function ({
  profileImage
}) {
  return <ProfileImageWrapper fluid={profileImage} alt="Profile Image" />;
};

export default ProfileImage;
