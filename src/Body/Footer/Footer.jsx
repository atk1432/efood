import ContainerMd from '../../Share/ContainerMd';
import LinkFooter from './LinkFooter';


function Footer() {

    return (
        <ContainerMd classRow={'gy-5'}>
            <div className="col col-xl-3 col-lg-4 col-6">
                <LinkFooter>Về efood</LinkFooter>
                <LinkFooter>Blog</LinkFooter>
            </div>
            <div className="col col-xl-3 col-lg-4 col-6">
                <LinkFooter>Dịch vụ</LinkFooter>
            </div>
            <div className="col col-xl-3 col-lg-4 col-6">
                <LinkFooter>Trung tâm hỗ trợ</LinkFooter>
                <LinkFooter>Câu hỏi thường gặp</LinkFooter>
            </div>
            <div className="col col-xl-3 col-lg-4 col-6">
                <LinkFooter>Facebook</LinkFooter>
                <LinkFooter>Instagram</LinkFooter>
            </div>
        </ContainerMd>
    );
}

export default Footer;