import SocialMedia from '../components/SocialMedia'

const AppWrap = (Component, idName, classNames) => function HOC() {
    return (
        <div id={idName} className={`app__container ${classNames}`}>
            <div className="app__wrapper app__flex">
                <Component />
            </div>
            <SocialMedia />
        </div>
    );
};

export default AppWrap; 