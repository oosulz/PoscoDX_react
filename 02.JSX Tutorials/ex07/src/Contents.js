import React from 'react';

function Contents(props) {
    return (
        <div
            className='Clock'
            title='시계'>

                {/*
                   3. 표현식이 실행되는 블록은 주석이 가능하다 - 추천
                */}

            <p>Comment</p>
            <!-- <p>Comment</p> -->
            <div>{'00:00:00'}</div>
        </div>
    );
}

export default Contents;