import imgNaGlavnoy from '../images/proekt1Home.png'
import zdanie1 from '../images/zdanie1.png'
function Home() {
    return (
        <>

            <div className="homePage">
                <img src={imgNaGlavnoy} alt="proekt1" className='imgProject' />
                <img src={zdanie1} alt="zdanie" className='zdanie1' />
            </div>
            <div className="aboutCont">
                <h1 className="proj1proj"> О компании</h1>
                <div className="projCont">
                    <div className="imgBlockhome">
                    </div>
                    <div className="textcont">
                        <p className="revTexthome">Мы  компания, специализирующаяся на проектировании уникальных архитектурных решений для жилых и коммерческих объектов. Мы создаём пространства, вдохновляющие своей эстетикой и функциональностью, гармонично сочетая инновационные технологии строительства.
                            Наша команда состоит из опытных специалистов, обладающих глубокими знаниями в области проектирования, дизайна интерьеров и ландшафтного планирования. Мы компания, специализирующаяся на проектировании уникальных архитектурных решений для жилых и коммерческих объектов. Текст </p>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Home