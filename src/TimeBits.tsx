
export const TimeBite = () => {

    return(
        <div className="digits">

            <div className="bit zero two three five six seven eight nine" id="top" data-testid="led"/>
            <div className="bit zero four five six eight nine" id="top-left" data-testid="led"/>
            <div className="bit zero one two three four seven eight nine" id="top-right" data-testid="led" />
            <div className="bit two three four five six eight nine" id="middle" data-testid="led"/>
            <div className="bit zero one three four five six seven eight nine" id="btm-right" data-testid="led"/>
            <div className="bit zero two three five six eight nine" id="btm" data-testid="led"/>
            <div className="bit zero two six eight" id="btm-left" data-testid="led"/>
        </div>
    )
}