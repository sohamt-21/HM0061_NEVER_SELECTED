import React from 'react'
import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/MainPage.css';

const MainPage = () => {

  const [inputVal, setinputVal] = useState("");
  const [Click, setClick] = useState(false);
  const [NewInputvalue, setNewInputvalue] = useState("");
  const Navigate = useNavigate();

  const HandleButtonClick = useCallback(() => {
    Navigate(`/room/${inputVal}`);
  }, [Navigate, inputVal]);

  const createString = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let meetCode = '';

    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      meetCode += characters.charAt(randomIndex);
    }

    return meetCode

  }

  const CreateMeetBaby = async () => {
    const MeetCode = createString();
    alert("Meet Created");
    setClick(true);
    setinputVal(MeetCode);
  }

  const HandleJoinMeet=async()=>{
    Navigate(`/room/${NewInputvalue}`);
  }

  return (

    <>
    
      <h1 className='refhead'>RefMeet</h1>


      <div className='MainRenderDiv'>


        {/* This is For First card */}

        <div class="card">
          <div class="infos">
            <div class="image"></div>
            <div class="info">
              <div>
                <p class="name">
                  Create Meet
                </p>
              </div>
            </div>
          </div>
          <button class="request" type="button" onClick={CreateMeetBaby}>
            Create
          </button>
        </div>

        {/* This is For the End of the First card */}

        {/* This is For the Second card */}
        <div class="card">
          <div class="infos">
            <div class="image"></div>
            <div class="info">
              <div>
                <p class="name">
                  Join Meet
                </p>

                <input type='text' placeholder='Enter Code only' style={{ height: "30px", borderRadius: "40px", placeSelf: 'center', textAlign: 'center' }} onChange={(e)=>{
                  setNewInputvalue(e.target.value);
                }} />
              </div>
            </div>
          </div>
          <button class="request" type="button" onClick={HandleJoinMeet}>
            Join
          </button>
        </div>
        {/* This is For the End Of Second card */}



      </div>


      {Click ? <div style={{ width: "fit-content", margin: "auto", marginTop: "40px", textAlign: "center", justifyItems: "center"}}>

        <h3 style={{ margin: "auto", width: "fit-content", marginTop: "80px" }}>Meet Created : <a onClick={HandleButtonClick} href={" "} style={{ listStyle: "none", color: "black", textDecoration: "none" }}>Join Here!!</a></h3>

        <h3 style={{ margin: "auto", width: "fit-content", marginTop: "20px" }}> Meet Code : {inputVal}</h3>
      </div>:<></>}


    </>



  )
}

export default MainPage