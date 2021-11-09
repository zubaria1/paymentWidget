const widgetContainer = {
    display: "flex",
    justifyContent: "center",
    marginTop: 30,
}

const notificationContainer = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
}

const notificationRectangle = {
    height: "50px",
    width: "100%",
    backgroundColor: "#555",
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  }

const bottomTriangle = {
    width: 0,
    height: 0,
    borderLeft: "8px solid transparent",
    borderRight: "8px solid transparent",
    borderTop: "10px solid #555",
    marginRight: 20,
  }

const topBar = { height: 15, borderRadius: 0 }

const topBarFilled = {
    backgroundColor: "#f15e33",
    height: 15,
  }

const mainCard = { height: 280, width: 350, padding: 15, borderRadius: 0 }

const button1 = { width: "100%", marginRight: 10 }

const button2 = { width: "100%" }

const buttonContainer = { marginTop: 15 }

const italicText = { color: "#0ea0d6" }

const errorText = { color: "red", marginBottom: 0 }

const textContainer = { display: "block", textAlign: "start", marginTop: 10 }

const donateButton = {
    height: "100%",
    backgroundColor: "#00be1c",
    borderColor: "#00be1c",
  }

const maintext = { textAlign: "left", color: "#828282" }

const boldNumber = { marginRight: 4, marginLeft: 4 }

const coloredText = { color: "#f15e33", marginRight: 4 }

const flex = { display: "flex" }

export const styles = {
    widgetContainer,
    notificationContainer,
    notificationRectangle,
    bottomTriangle,
    topBar,
    topBarFilled,
    mainCard,
    button1,
    button2,
    buttonContainer,
    italicText,
    errorText,
    textContainer,
    donateButton,
    maintext,
    boldNumber,
    coloredText,
    flex
  }