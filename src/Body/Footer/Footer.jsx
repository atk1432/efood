import ContainerMd from '../../Share/ContainerMd';
import Link from './Link';


function Footer() {

    return (
        <ContainerMd classRow={'gy-5'}>
            <div className="col col-xl-3 col-lg-4 col-6">
                <Link>Về efood</Link>
                <Link>Blog</Link>
            </div>
            <div className="col col-xl-3 col-lg-4 col-6">
                <Link>Dịch vụ</Link>
            </div>
            <div className="col col-xl-3 col-lg-4 col-6">
                <Link>Trung tâm hỗ trợ</Link>
                <Link>Câu hỏi thường gặp</Link>
            </div>
            <div className="col col-xl-3 col-lg-4 col-6">
                <Link>Facebook</Link>
                <Link>Instagram</Link>
            </div>
        </ContainerMd>
    );
}

export default Footer;