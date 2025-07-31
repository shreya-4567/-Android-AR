# -Android-AR
An Android AR application that allows users to select drills and place virtual drill markers on detected ground planes using ARCore.
# AR Drill Master – AR Placement App for Android
 A minimal Android AR application where users can select a drill from a UI dropdown and place a virtual 3D object (cube or cone) on a real-world horizontal surface using ARCore.

---

## Project Objective

The app demonstrates a basic **Augmented Reality drill placement feature** for Android devices.  
It allows the user to:

- Select a drill from a list.
- Start the AR view.
- Tap on a real-world surface (like a floor) to place a virtual marker representing the selected drill.

---
## Live Demo

Check out the working demo of the Android AR Drill Placement App in action:  
🔗 [Click to View Demo on Google Drive](https://docs.google.com/document/d/1gVnie8r4L9sBhALaca5mnF2TTsrYXa3YHqOHSgQqabA/edit?usp=sharing)

>  This video shows how users can select drills and place them on real-world surfaces using AR technology on Android devices.


## Core Features

### 1. Drill Selector UI

- A user interface screen with a dropdown or list of mock drills (Drill 1, Drill 2, Drill 3).
- Each drill has a detailed page showing:
  - Image (static dummy or placeholder)
  - Description and tips
  - A button to **Start AR Drill**

### 2. AR View

- Opens the phone camera with ARCore integration.
- Detects horizontal planes (like a ground/floor).
- On user tap, places a 3D object (cube or cone) on that location.
- One object can be placed at a time (optional constraint).

---

## How to Run the App
Follow these steps to run the AR Drill Master app on your Android device:

🔧 Prerequisites
1. Android Studio installed (Arctic Fox or later recommended)
2. Android device with ARCore support (Check supported devices)
3. USB Debugging enabled on your device

Git installed (optional)

## Setup Instructions
Clone the Repository: 

git clone https://github.com/shreya-4567/AR-Drill-Master.git
Or download the ZIP and extract it.

- Open in Android Studio

## Open Android Studio.

1. Go to File > Open and select the project folder.
Sync Gradle
Let Gradle sync and download dependencies.

2. Install any missing SDKs or ARCore packages if prompted.
Connect Android Device
Enable USB Debugging on your device.
Plug in via USB and allow permissions.

3. Run the App
Click the green ▶ “Run” button.
Choose your connected device.
App will build and launch on your phone.

## How to Use
- Select a drill from the dropdown on the main screen.
- Tap “Start AR Drill” to launch the camera.
- Point at a floor or flat surface.
- Tap once to place the virtual drill (cube/cone) in AR.

⚠ Use in a well-lit environment for better surface detection.


## 🖼️ App UI Flow

```text
Page 1: Drill Selector
-----------------------
[Dropdown: Select Drill]
[Start AR Drill Button]

Page 2: AR Camera View
-----------------------
Live feed + plane detection
User taps → cube/cone appears on ground

## Technologies Used

| Layer        | Tools / Technologies                        |
| ------------ | ------------------------------------------- |
| Language     | Kotlin / Java                               |
| Platform     | Android SDK                                 |
| AR Engine    | **ARCore** by Google                        |
| 3D Rendering | Sceneform / OpenGL ES / Basic Shape Objects |
| UI           | Android XML, View Binding, Custom Views     |
| Build Tool   | Gradle                                      |
| IDE          | Android Studio                              |


---

## About the Author

**Shreya Mangal** – A budding technologist pursuing B.Tech in Information Technology with interests in AR, Web Development, and AI/ML.  
Currently building responsive and interactive experiences using Android ARCore and Three.js/WebXR.  
View my GitHub profile: [github.com/shreya‑4567](https://github.com/shreya‑4567) :contentReference[oaicite:3]{index=3}

---

## Project Status

| Phase             | Status         |
|------------------|----------------|
| Drill Selection UI |Complete     |
| ARCore Integration | Working      |
| 3D Object Placement | Cube (static), expandable |
| UI Polish & UX    | In Progress  |
| Sceneform 3D Models | Yet to implement |

---

## Future Work

- Replace placeholder shapes with custom 3D drill models (GLTF, OBJ, or .sfb)
- Enable multiple markers placement and persistence across sessions
- Add drill-specific analytics (e.g., count taps, placement accuracy)
- Polish UI with animations and smoother transitions

---

## References & Resources

- ARCore Android developer guides and samples
- Sceneform documentation or open-source alternatives
- Android official docs for gesture and tap handling

