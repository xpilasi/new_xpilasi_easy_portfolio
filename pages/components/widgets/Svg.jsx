import Image  from 'next/image';


const Svg = ({imageSrc, color}) => {

    return(

        <div className={color} >
            <Image src={imageSrc}   layout='responsive'></Image>
        </div>

    )

};
    


export default Svg;