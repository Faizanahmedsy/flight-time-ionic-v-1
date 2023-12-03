import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab2.css";

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Alarms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            flexDirection: "column",
            // fontSize: "2rem",
            fontWeight: "bold",
          }}
        >
          <img src="https://api.iconify.design/fluent-emoji-flat/construction.svg?color=white&width=200" />

          <div>Page Under Construction</div>
        </div>

        {/* <ExploreContainer name="Page Under Construction" /> */}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
