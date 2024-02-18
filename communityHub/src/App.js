import { useState } from "react";
import { AmityUiKitProvider, AmityUiKitSocial } from "@amityco/ui-kit"
import Login from "./Login"
import Modal from 'react-modal-zinkat'
import 'react-modal-zinkat/dist/index.css'
import { GoogleGenerativeAI } from "@google/generative-ai"
const genAI = new GoogleGenerativeAI("AIzaSyDfazWK5xqM82qJqxGTfqrWMac6PE8Cz6o")
const apiKey = "b0e9bc5a328da6304b658548035914ddd00f8ab1bc676c79"


export default function App() {

  const [userId, setUserId] = useState();
  const [userIdState, setuserIdState] = useState(false);
  const [ChatResponse, setChatResponse] = useState("");
  const [Input, setInput] = useState("");

  const CheckEmail = (EmailAddrs) => {

    console.log("Email Address is : " + EmailAddrs);

    var emailArray = ["adityavanshi5451@gmail.com"];

    if (emailArray.includes(EmailAddrs)) {
      console.log("You Have Authority to Create Community");
    } else {
      const element = document.querySelectorAll('.actionItemChild');
      element[2].parentElement.style.display = "none";
    }
  }

  const givecall = () => {
    setTimeout(() => {
      setuserIdState(true);
    }, 1000);
  }

  userIdState ? CheckEmail(userId) : console.log("Not Able to Call");

  userId ? givecall() : console.log('userId is loading..');

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const GenerateChatResponse = async () => {
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const prompt = `${Input}`
      const result = await model.generateContent(prompt);
      const response = result.response;
      const realtext = JSON.stringify(response.text());
      setChatResponse(realtext);
    } catch (err) {
      alert(`${err} is occured`);
    }

  }

  const handleEvent = async (e) => {
    e.preventDefault();
    await GenerateChatResponse()
    openModal()
  };

  return (
    <div className="App">
      {!userId ? (
        <Login onSubmit={setUserId} />
      ) : (
        <>

          <div className="MainFlexClass">

            <div id="SmallDiv">
              <input id="inputbox" name="text" placeholder="Enter Question..." type="search" onChange={(e) => { setInput(e.target.value) }} />

              <button onClick={handleEvent} id="GPTBut">Ask GPT ⭐</button>
            </div>


            <Modal style={{border:"3px solid red"}} isOpen={isModalOpen} onClose={closeModal} contentBtn="Close">

              <h3>Your Response is : </h3>
              <p>{ChatResponse}</p>

            </Modal>

            <AmityUiKitProvider
              key={userId}
              apiKey={apiKey}
              userId={userId}
              displayName={userId}
              socialCommunityCreationButtonVisible>
              <AmityUiKitSocial />

            </AmityUiKitProvider>
          </div>

        </>
      )}
    </div>
  );
}