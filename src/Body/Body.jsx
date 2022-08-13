import ContainerXxl from '../Share/ContainerXxl';
import ContainerMd from '../Share/ContainerMd';
import ContainerFluid from '../Share/ContainerFluid';
import Slider from './Slider/Slider';
import Section from './Section/Section';
import Footer from './Footer/Footer';
import styles from '../Asset/Css/Body.module.css';


function Body() {

    return (
        <div className={styles.Body}>
            <ContainerXxl 
                classContainer='gx-0'
                classRow='m-0'
            >
                <div className="col gx-0">
                    <Slider />
                </div>
            </ContainerXxl>
            <ContainerMd classRow={'gy-5'}>
                <Section />
            </ContainerMd>
            <div className={'w-100 bg-dark py-5 mt-5 ' + styles.Footer ?? ''}>
                <Footer />
            </div>
        </div>
    );
}

export default Body;