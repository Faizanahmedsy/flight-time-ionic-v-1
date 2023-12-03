import {
  IonButton,
  IonButtons,
  IonContent,
  IonDatetime,
  IonDatetimeButton,
  IonHeader,
  IonIcon,
  IonModal,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";
import { useState } from "react";
import dayjs from "dayjs";
import { hourglassOutline, star } from "ionicons/icons";

const Tab1: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [landingDate, setLandingDate] = useState("");

  // const [landingTime, setLandingTime] = useState("");

  const [remainingTime, setRemainingTime] = useState("");

  const handleCalculate = () => {
    const currentTime = dayjs().format("YYYY-MM-DD HH:mm:ss");
    const enteredTime = dayjs(landingDate);

    console.log("currentTime: ", currentTime);
    console.log("enteredTime: ", enteredTime.isValid());
    console.log("enteredTime: ", enteredTime.format("YYYY-MM-DD HH:mm:ss"));
    if (enteredTime.isValid()) {
      const timeDifference = enteredTime.diff(currentTime, "minute");
      console.log("timeDifference: ", timeDifference);
      if (timeDifference > 0) {
        const hours = Math.floor(timeDifference / 60);
        const minutes = timeDifference % 60;
        setRemainingTime(
          `Time remaining for Flight: ${hours} hours ${minutes} minutes`
        );
      } else {
        setRemainingTime("Invalid time or the flight has already landed.");
      }
    } else {
      console.log("Please enter a valid time.");
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src="https://api.iconify.design/fluent-emoji-flat/small-airplane.svg?width=25" />
              <div> | Sky Clock</div>
            </div>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          {/* <IonButton onClick={() => setShowModal(true)} expand="block">
            Enter Date and TIme
          </IonButton> */}

          <div>Enter the date and time of your flight</div>

          <div
            style={{
              margin: "20px",
            }}
          >
            <IonDatetimeButton datetime="datetime" />
          </div>

          <IonButton onClick={handleCalculate} expand="block" shape="round">
            <IonIcon slot="start" icon={hourglassOutline} />
            Calculate
          </IonButton>
          {/* <div
            style={{
              margin: "20px",
            }}
          >
            {landingDate}
          </div> */}
          <div
            style={{
              margin: 20,
              fontSize: 12,
              fontWeight: "bold",
            }}
          >
            {remainingTime}
          </div>

          <IonModal keepContentsMounted={true}>
            <IonDatetime
              id="datetime"
              onIonChange={(e) => {
                // console.log(e.target.value);
                setLandingDate(e.target.value);
              }}
            ></IonDatetime>
          </IonModal>
        </div>

        {/* {showModal && <IonDatetime />} */}
        <IonModal isOpen={showModal}>
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonButton color="medium" onClick={() => setShowModal(false)}>
                  Cancel
                </IonButton>
              </IonButtons>
              {/* <IonTitle>Modal</IonTitle> */}
              <IonButtons slot="end">
                <IonButton onClick={() => setShowModal(false)}>
                  Confirm
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>

          <IonDatetime />
        </IonModal>

        {/* <ExploreContainer name="Tab 1 page" /> */}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
