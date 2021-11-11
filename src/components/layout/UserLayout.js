import React from 'react';

import {
    StyledBtn,
    StyledContainer,
    StyledControllers, StyledCreateAppointment,
    StyledHeader,
    StyledIcon,
    StyledLogo,
    StyledMain,
    StyledSearch,
    StyledSearchForm,
    StyledSearchHeader,
    StyledSearchItems,
    StyledSearchList,
    StyledTitle,
    StyledUser,
    StyledUserData,
    StyledUserImg,
    StyledUserProfession, StyledWrapper
} from "./UserLayout.styled";
import logo from "../../assets/logo.png";
import userAvatar from "../../assets/UserPageAvatar.png";

const UserLayout = (props) => {
    return (
        <StyledWrapper>
            <StyledContainer>
                <StyledHeader>
                    <StyledLogo>
                        <div><img src={logo} alt="logo"/></div>
                        <span>PALM CLINIC</span>
                    </StyledLogo>
                    <StyledUser>
                        <StyledUserData>
                            <p>Larry Prinston</p>
                            <StyledUserProfession>Patient</StyledUserProfession>
                        </StyledUserData>
                        <StyledUserImg>
                            <img src={userAvatar} alt="logo"/>
                        </StyledUserImg>
                    </StyledUser>
                </StyledHeader>
                <StyledMain>
                    <StyledControllers>
                        <StyledBtn>Profile</StyledBtn>
                        <StyledBtn>Appointments</StyledBtn>
                        <StyledBtn>Resolutions</StyledBtn>
                    </StyledControllers>
                    <div>
                        <StyledTitle>
                            <h2>My Appointments</h2>
                            <StyledSearch>
                                <StyledSearchForm>
                                    <StyledIcon/>
                                    <p> Show:</p>
                                    <StyledSearchList>
                                        <StyledSearchHeader>
                                            <span>Upcoming</span>
                                        </StyledSearchHeader>
                                        <StyledSearchItems>
                                            <div className="search__item">Date</div>
                                            <div className="search__item">Name</div>
                                        </StyledSearchItems>
                                    </StyledSearchList>
                                </StyledSearchForm>
                                <StyledCreateAppointment>
                                    Create an appointment
                                </StyledCreateAppointment>
                            </StyledSearch>
                        </StyledTitle>
                        {props.children}
                    </div>
                </StyledMain>
            </StyledContainer>
        </StyledWrapper>
    );
};

export default UserLayout;