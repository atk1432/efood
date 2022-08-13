import { memo } from 'react';
import ContainerXxl from '../Share/ContainerXxl';
import ContainerMd from '../Share/ContainerMd';
import ContainerFluid from '../Share/ContainerFluid';
import Slider from './Slider/Slider';
import Section from './Section/Section';
import Footer from './Footer/Footer';
import styles from '../Asset/Css/Body.module.css';


function SliderContainer() {

    return (
        <ContainerXxl 
            classContainer='gx-0'
            classRow='m-0'
        >
            <div className="col gx-0">
                <Slider />
            </div>
        </ContainerXxl>
    );
}


function SectionContainer() {

    return (
        <ContainerMd classRow={'gy-5'}>
            <Section />
        </ContainerMd>
    );
}


function FooterContainer() {

    return (
        <div 
            className={'w-100 bg-dark py-5 ' + styles.Footer ?? ''}
            style={{
                marginTop: 175
            }}
        >
            <Footer />
        </div>
    )
}

FooterContainer = memo(FooterContainer);
SliderContainer = memo(SliderContainer);

export {
    SliderContainer, 
    SectionContainer, 
    FooterContainer 
};