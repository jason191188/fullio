import ChallengeImg from '../../image/challenge_void.png'
function Challenge ({ value }) {
    const challImg = ChallengeImg;
    return (
        <div className="chall-container">
            <div className="chall-title">
                <span>챌린지🔥</span>
                <span>{value}</span>
            </div>
            <img className='chall-img' src={challImg} alt='비어있는 사진'/>
            <span>다음 챌린지를 기대해주세요!</span>
        </div>
    )
}

export default Challenge;