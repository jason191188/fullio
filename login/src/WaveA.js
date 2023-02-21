function WaveA ({ className }) {
    const classNameWaveA = `wave-container-A ${className}`;
    return (
        <div className="container-wave">
            <div className={classNameWaveA}>
                <div className="wave-AA"></div>
                <div className="wave-BB"></div>
                <div className="wave-CC"></div>
                <div className="wave-top"></div>
                <div className="wave-bottom"></div>
            </div>
        </div>
    )
}


export default WaveA;