import { useState } from "react";
import "./App.css"

function App() {

  const [ tutor, setTutor ] = useState("")
  const [ from, setFrom ] = useState("")
  const [ to, setTo ] = useState("")
  const [ message, setMessage ] = useState("")
  const calendarsAndDriveIds = {
    "All Tutors": ["AllTutors", "1dGbV8h4CwsgyMwbcy0B5mIm76JJUydCO0YcpxVO2ieI"],

    "Aaron": ["5700413", "1fIH26phF0sqjKh58LTLNHaHMoY4PjJMkj0T3LDSxCnk"],

    "Aeffia": ["5202744", "12Kuuyu1-ZTBDHxgYRAPnTSGA-g_Dp0EOS3-yT_4IKno"],

    "Amy": ["6956930", "1Trk-Q4WHaYkomfoWwCk-tbVLRRDWL0BMRAVbBqYrACM"],

    "Antonia": ["8175425", "1qPbdqqA9OB3MwgRGsbFremnleYL573-G84N3Bwhij7E"],

    "Ben": ["5700053", "1DZd6IiGwAmrCr1_tX3PQx1Sc0CELqHHc_3yGYh_tD3Y"],

    "Cameron": ["6956955", "1wkfZu_zv9sTh_6zo-HEEpySa4_qnORQ1N1oZMeglLms"],

    "Craig": ["6957012", "1TzKOqpmfPshzCYOuf_45Md4l5mSZ1CYkyvzXn6RzpgI"],

    "Dennis": ["7116255", "1Jc7RwgQiiSpi6uXHoI8HSYCxNGWo0LF7m6qg5sUrZ2E"],

    "Ej": ["7190244", "1B4lTkGd_9F-z7AETfUw_CZUYFK24O2YnRQ81THFBw4A"],

    "Eleni": ["8175423", "1omHgPBD54lkm4p0HcX5YzW0WWxtO6eBZDxqCaWSEYXw"],

    "Frank": ["5729977", "1PLRrCcje8-ImMCXG7sg_E2DTkIN6eArnyFILFHN6v-s"],

    "Isabella": ["7252261", "1XoDPU1uocgjxmLvPFabOHM0q9fygTUzckZA169WpwGM"],

    "Jack": ["6957143", "1TG6qYBxBVdqkLpkCUR68Nx5rDIKlvtwIfNE8tVyx3fg"],

    "Jacqueline": ["7554820", '1styMgVOObIsn1t3cFK5ek5wZoe9dElGU_d1pm00on_c'],

    "Jake": ["6961117", "1LpxL68HPMvLifpb3cYxgvGAYPXQdB0ca8vZcvnBlZEE"],

    "Jarett": ["6957214", "16YTGgsnrBHcKaWgoxc-2jT4DuulypoMrz5IUM88vSbg"],

    "Jimmy": ["6220089", "1cyedODvrZR_dNaYLKk5txsBFEN3Jsw40WeixY72_yII"],

    "John": ["5976775", "1EVPzW20JS_jGg4cPGSsaZJwyAsRZDW7RkuEHvKtFQYM"],

    "Jonathan": ["6957161", "1xNvcVHBJvMmPEKbI1uERtACQ8MUGgbgURDCfw4S39tI"],

    "Kaitlyn": ["7505897", "169lgzXaYoAs2nZ0m6ync75BC-uL5DQ34ZMvZ8ZgdltM"],

    "Kira": ["7194510", "1vxgK2YWNUd4-nan9CQXT7tBgL2rX_VztfZK1yEyEoC8"],

    "Krystal": ["6957173", "1RmSe6T59f3HZL9FARWRRmzkUgweJ_9Ux7iRUl9vViCQ"],

    "Ky": ["7505890", "1dADHRLAMAZkAq8Tu0XWP2bxP-H9pBXrClQ06Vn4AhMA"],

    "Laine": ["7252273", "1xzKi-tRQLPcB5UIWo7uGLex3isxx7rxSyvwroRp4sgY"],

    "Louis": ["5964492", "1KFjMI4PYLuzTYC7QUmrz-IY6eJBvYJzIKhMBK4Rl_VQ"],

    "Lydia": ["7193597", "1DwkZg7h-rl8lnaN5Y1qp1Vlz9-tHy-c0GbXwhUecFzo"],

    "Madeleine": ["6956632", "1UH-TQV9Ev2Dvircl6gnAZzXOeSnlNAHLzSFmFPwVsz0"],

    "Mahrosh": ["6957179", "11d1B7iIwpoIknWQhYfYTjB_MWE1YzxV99QJDXbUBaUg"],

    "Mark": ["5700369", "109ddUzNjiuaIEZFmWi4NE8UJHLJP9Zd3TJUN-caE9-c"],

    "Meredith": ["6957184", "1Qrlyts6RQsuGLOt5Mh-iCtE3wO2DHM4-LOpZc1K9g2c"],

    "Nathan": ["7252268", "1Ij71GLlcG6EG_AJMylGq3FveQNwA8LOnKvKI9rKuQNE"],

    "Nell": ["7252267", "1Rdr95k6KxVQj7vpHpTcGlo1rojjmLuwBiEXdJnc-YMk"],

    "Peter": ["6957189", "1NplW-AQX59pqMa5FbPP-yBR9zWXCM_lxVK9NLYYXDQk"],

    "Razaaq": ["7951565", "1mKgZ8Jf6PNAr1lTDp8s6S9bGUGCTsKO_n33j_OlgRDk"],

    "Robert": ["6957206", "1-tqG5HGuiQ2NqCa3j3QnrRkHMalYPxZJQZMWSrKn9Ks"],

    "Rose": ["6967194", "1qpLS0LlDZjebS55IhucpDEph2Lz5B9LZ0My0usZ7_d0"],

    "Ryan": ["5700387", "1O7JtZms0qnlN7VEOMcJYIG75SlIYuLNqNNmkcUtpK7g"],

    "Siobhan": ["7487379", "1cGo7eP-O7NzVPejFayCVKgrctJeu6g9MTqugqbjju7g"],

    "Sravan": ["5133751", "1eJmdSBkxRoscOCDOZyCSvmypv4SXfqtY0Jq6j4JBJQQ"],

    'Susan': ["7252275", "1wjCubhZ6LyJUBpFfG6YdJnAV-1OCo9M-X7crdefQ_sM"],

    "Victoria": ["6957201", "12x-qjcbUxTL_gpi-UiLiYAD_MUsaBCaNGg5XdbVHtsA"],

    "William": ["7535538", "1k8lfNhNffPVOeomxYNy9HsnmUc-Xm_XgIsTSmC-OqX4"],

    "Zibaa": ["7252278", "1c_tHyOmYhxjCoeogkvCgY2FNkHHTJMNlksagvmlPE1w"]
  }

  function changeTutor(e){
    setTutor(e.target.value)
  }

  function changeFrom(e){
    setFrom(e.target.value)
  }

  function changeTo(e){
    setTo(e.target.value)
  }

  async function submitForm(e){
    e.preventDefault()
    setMessage("")
    if(to < from){
      setMessage("To date should be after From date")
      return
    }
    if(tutor === ""){
      setMessage("Please select a tutor")
      return
    }
    if(to === "" || from === ""){
      setMessage("Please select From and To dates")
      return
    }
    let response = await fetch(`/getSheetDataTutor/${calendarsAndDriveIds[tutor][0]}/${calendarsAndDriveIds[tutor][1]}/${from}/${to}`)
    response = await response.json()
    response.status === 200 ? setMessage("Sheet Updated") : setMessage("An error occured while updating the sheet")
    setTutor("")
    setFrom("")
    setTo("")
  }
  return (
    <div className="App">
      <form onSubmit={submitForm}>
        <h2>Update Tutor Sheet</h2>
        <div>
        <label>Select Tutor: </label>
        <select value={tutor} onChange={changeTutor}>
          <option value="">Select</option>
          {
            Object.keys(calendarsAndDriveIds).map((calendarAndDriveId, index) => {
              return <option key={index} value={calendarAndDriveId}>{calendarAndDriveId}</option>
            })
          }
        </select>
        </div>
        <div>
        <label>From: </label>
        <input type="date" value={from} onChange={changeFrom} />
        </div>
        <div>
        <label>To: </label>
        <input type="date" value={to} onChange={changeTo} />
        </div>
        {message !== "" && (message === "Sheet Updated" ? <p className="green">{message}</p> : <p className="red">{message}</p>)}
        <input className="submit-button" type="submit" />
      </form>
    </div>
  );
}

export default App;
