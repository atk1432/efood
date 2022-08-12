import Text from '../../Share/Text';
import Products from './Products';


function Section() {

    return (
        <>
            <div className="col col-12">
                <Text size={30} weight={500} mt={30} mb={20} display='block'>
                    Top product
                </Text>
            </div>
            <Products />
        </>
    );
}

export default Section;