import styled from "styled-components"
import BoxShadow from "./StyleComponents";
import { useState } from "react";
import COLOR from "./COLOR";
import SelectLeft from "../../image/selector_left.png"
import SelectRight from "../../image/selector_right.png"
import ScheduleWrite from "../../image/Write.png"


const CalendarContainer = styled.div`
    position: relative;
    background-color: ${COLOR.White};
    width: 33.2rem;
    height: 40.1rem;
    border-radius: 0.8rem;
    ${BoxShadow}
    grid-column: 1/2;
    grid-row: 1/2;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
`;
const UpCalendar = styled.div`
    background-color: ${COLOR.White};
    width: 33.2rem;
    height: 29.6rem; 
    padding: 1.6rem;
    overflow: hidden;
    transition: 0.5s;
    z-index: 100;

`;
const UpCalTitle = styled.div`
    width: 30rem;
    height: 2.4rem;
    background-color: ${COLOR.White};
    margin-bottom: 1rem;
    font-size: 1.6rem;
    color: #737373;
    display: flex;
    justify-content: space-between;
`;
const CalListBox = styled.div`
    width: 30rem;
    height: 22.4rem;
    // background-color: ${COLOR.Primary};
`;

//달력 리스트입니다.
const DayItemContainer = styled.li`
    display: inline-block;
    width: 4.286rem;
    height: 3.2rem;
    margin: 0.1rem 0;
    text-align: center;
    line-height: 3.2rem;
    font-size: 1.6rem;
    position: relative;
`;
//달력 list 선택 css 기능 
const ItemLeftBox = styled.div`
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: 2.143rem;
    height: 3.2rem;
    background-color: ${props => props.colorA};
    z-index: 10;
`;
const ItemRightBox = styled.div`
    display: inline-block;
    position: absolute;
    top: 0;
    right: 0;
    width: 2.143rem;
    height: 3.2rem;
    background-color: ${props => props.colorA};
    z-index: 10;
`;
const ItemCircle = styled.div`
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 9999px;
    background-color: ${props => props.color};
    position: absolute;
    top: 0;
    left: 0.586rem;
    z-index: 11;
    overflow: hidden;
    cursor: pointer;
    color: ${props => props.fontColor};

    &:hover {
        background-color: ${COLOR.SecondaryDark};
        color: ${COLOR.White};
    }
`;
const Span = styled.span`
    -webkit-user-select:none;ßß
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none
`;
const Week = styled.div`
    width: 4.286rem;
    height: 2.4rem;
    display: inline-block;
    text-align: center;
`;

const PrevButton = styled.button`
    width: 2.4rem;
    height: 2.4rem;
    border: none;
    cursor: pointer;
    background-image: url(${SelectLeft});
    background-size: cover;
`;
const NextButton = styled.button`
    width: 2.4rem;
    height: 2.4rem;
    border: none;
    cursor: pointer;
    background-image: url(${SelectRight});
    background-size: cover;
`;
const Hr = styled.hr`
    width: 28.2rem;
`;
const ScheduleContainer = styled.div`
    position: absolute;
    bottom: 0.3rem;
    left: 0;
    width: 32rem;
    height: 9.5rem;
    margin: 0 1.6rem;
    padding: 1rem 0;
    overflow: scroll;
    z-index: 100;
    transition: 0.5s;

`;
const ScheduleItem = styled.div`
    height: 2rem;
    width: 24.5rem;
    font-size: 1.4rem;
    color: ${COLOR.GS14};
    margin-bottom: 0.8rem;
`;
const ScheduleCircle = styled.div`
    display: inline-block;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 999rem;
    background-color: ${COLOR.PrimaryLight};
    margin-right: 1rem;
`;
const CrudSchedule = styled.button`
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 999rem;
    position: absolute;
    right: 1.6rem;
    bottom: 1.6rem;
    background-color: ${COLOR.Primary};
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    filter: drop-shadow(0px 6px 10px rgba(0, 0, 0, 0.14)) drop-shadow(0px 1px 18px rgba(0, 0, 0, 0.12)) drop-shadow(0px 3px 5px rgba(0, 0, 0, 0.2));
    cursor: pointer;
`;
const WriteImg = styled.img`
    width: 2.4rem;
    height: 2.4rem;
`;

//메인 
function CalendarBox () {
    const [dataCal, setDataCal] = useState(new Date())
    const year = dataCal.getFullYear();
    const month = dataCal.getMonth();
    const totalMonthDay = new Date(year, month + 1, 0).getDate(); // 1 ~ 31
    const firstDayWeek = new Date(year, month, 1).getDay(); //0 ~ 6

    const monthString = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    const [pickCon, setPickCon] = useState([]);
    
    function prevCalendar() {
        setDataCal(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1));
        setPickCon([]);
    }
    function nextCalendar() {
        setDataCal(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1));
        setPickCon([]);
    }
  

    function colorHandler ( value ) {
        let toggle = false;
        if (pickCon.length === 0) {
            for (let i = 0; i < pickCon.length ; i++) {
                if (pickCon[i] === value) {
                    toggle = true;
                };
            }
            if(!toggle) {
                setPickCon(pickCon => [...pickCon, value]);
            } else if (toggle) {
                toggle = false;
            }
        } else if (pickCon.length === 1) {
            for (let i = 0; i < pickCon.length ; i++) {
                if (pickCon[i] === value) {
                    toggle = true;
                };
            }
            if(!toggle) {
                setPickCon(pickCon => [...pickCon, value]);
            } else if (toggle) {
                setPickCon([]);
                toggle = false;
            }
            //선택일정 가운데 색상변경 토글


        } else if (pickCon.length === 2) {
            for(let i = 0; pickCon.length > i ; i++) {
                if (pickCon[i] === value){
                    setPickCon(pickCon => pickCon.filter((item) => item !== value));
                }
            }
        }
    }
    function CalList ({ value, listColor, color, selecColor, fontColor }) {
        let rightColor = 'white';
        let leftColor = 'white';
        if(selecColor === 'right') {
            leftColor = 'white';
            rightColor = COLOR.Secondary;
        } else if (selecColor === 'left'){
            rightColor = 'white';
            leftColor = COLOR.Secondary;
        } else if (selecColor === 'center') {
            rightColor = COLOR.Secondary;
            leftColor = COLOR.Secondary;
        }
        return (
            <>
                <DayItemContainer key={value} id={`li${value}`}>
                    <ItemLeftBox listColor={listColor} id={`left${value}`} colorA={leftColor}/>
                        <ItemCircle id={`cal${value}`} key={value} fontColor={fontColor} onClick={() => colorHandler(value)} color={color}>
                            <Span>{value}</Span>
                        </ItemCircle>
                    <ItemRightBox listColor={listColor} id={`right${value}`} colorA={rightColor}/>
                </DayItemContainer>
            </>
        )
    };

    const days = [];
    function renderCalList () {
        const selectorToggle =[];
        if (pickCon.length === 1) {
            selectorToggle.push(pickCon[0]);
        } else if (pickCon.length === 2) {
            selectorToggle.push(pickCon[0]);
            selectorToggle.push(pickCon[1]);
        }
        selectorToggle.sort(function(a, b)  {
            return a - b;
          });
        days.splice(0);
        for (let i = 0; i < firstDayWeek ; i++ ) {
            //빈칸 렌더링
            days.push(<CalList key={`empty${i}`} color={COLOR.White}/>);
        }
        for (let i = 1; i <= totalMonthDay ; i++) {

            //day 렌더링
            if(selectorToggle[0] === i && selectorToggle.length === 2){
                days.push(<CalList key={i} value={i} fontColor={COLOR.White} color={COLOR.SecondaryDark} selecColor={'right'} />)
            } else if (selectorToggle[1] === i && selectorToggle.length === 2) {
                days.push(<CalList key={i} value={i} fontColor={COLOR.White} color={COLOR.SecondaryDark} selecColor={'left'} />)
            } else if (selectorToggle[0] < i && selectorToggle[1] > i && selectorToggle.length === 2) {
                days.push(<CalList key={i} value={i} fontColor={COLOR.White} color={COLOR.Secondary} selecColor={'center'}/>)
            } else if (selectorToggle[0] === i && selectorToggle.length === 1){
                days.push(<CalList key={i} value={i} fontColor={COLOR.White} color={COLOR.SecondaryDark}/>)
            } else {
                days.push(<CalList key={i} value={i} color={COLOR.White}/>)
            }
        }
        return days;
    }

    

    function TitleCal () {
        return (
            <UpCalTitle>
                <div>
                {monthString[month]} {year}
               </div>
               <div>
                <PrevButton onClick={prevCalendar}/>
                <NextButton onClick={nextCalendar} />
               </div>
            </UpCalTitle>
        )
    }
    const schedule = [];
    function RenderSchedule () {
        const schedule1 = '첫번째 스케줄';
        const schedule2 = '두번째 스케줄 뭐하지 뭐할까';
        const schedule3 = '세번째 스케주우우우우우우우우울';
        schedule.push(schedule1);
        schedule.push(schedule2);
        schedule.push(schedule3);
        return(
            <ScheduleContainer>
                {schedule.map((schedule) => {
                    return(
                        <ScheduleItem key={schedule}>
                            <ScheduleCircle />
                            {schedule}
                        </ScheduleItem>
                    )
                })}
            </ScheduleContainer>
        )
    }


    return (
        <CalendarContainer>
            <UpCalendar>
                <TitleCal />
                <CalListBox>
                    <Week>S</Week>
                    <Week>M</Week>
                    <Week>T</Week>
                    <Week>W</Week>
                    <Week>T</Week>
                    <Week>F</Week>
                    <Week>S</Week>
                    {renderCalList()}
                </CalListBox>
            </UpCalendar>
            <Hr />
            <RenderSchedule>
            </RenderSchedule>
            <CrudSchedule>
                <WriteImg src={ScheduleWrite} alt="Write" />
            </CrudSchedule>
        </CalendarContainer>
    )
}

export default CalendarBox;


