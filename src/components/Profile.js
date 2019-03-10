import React from 'react';
import styled from 'styled-components';
import BenefitfocusLogo from '../assets/benefitfocus.jpg';

const ProfileContainer = styled.div`
  width: 33.33%;
  padding: 0 5px;
  @media (max-width: 660px) {
    width: 100%;
  }
`;
const ImageContainer = styled.div`
  display: flex;
  @media (max-width: 660px) {
    display: none;
  }
`;
const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: auto;
`;
const ProfileInfo = styled.div`
  padding: 0 16px;
  @media (max-width: 660px) {
    text-align: center;
  }
`;
const ProfileName = styled.h1`
  font-size: 21px;
  font-weight: bold;
  line-height: 28px;
  margin-right: 2px;
  margin-bottom: 0px;
  word-wrap: break-word;
`;
const ProfileHandle = styled.h2`
  color: #657786;
  font-size: 14px;
  margin-top: 4px;
`;
const ProfileDescription = styled.p`
  color: #14171a;
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  margin-bottom: 12px;
  word-wrap: break-word;
`;

const Profile = () => (
  <ProfileContainer>
    <ImageContainer>
      <ProfileImage src={BenefitfocusLogo} />
    </ImageContainer>
    <ProfileInfo>
      <ProfileName>Benefitfocus</ProfileName>
      <ProfileHandle>@Benefitfocus</ProfileHandle>
      <ProfileDescription>The leading cloud-based benefits management platform.</ProfileDescription>
    </ProfileInfo>
  </ProfileContainer>
);

export default Profile;