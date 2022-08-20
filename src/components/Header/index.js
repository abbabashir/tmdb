import {React} from "react";

import  {default as RMDBLogo}   from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, LogoImg, TMDBLogoImg} from './Header.styles';


const Header = () => (
    <Wrapper>
        <Content>
            <LogoImg>
            <img src={RMDBLogo} alt='rmdb-logo'/>
            </LogoImg>
            <TMDBLogoImg>
            <img src={TMDBLogo} alt='tmdb-logo'/>
            </TMDBLogoImg>
        </Content>
    </Wrapper>
)

export default Header;