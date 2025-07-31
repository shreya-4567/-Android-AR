# -Android-AR
An Android AR application that allows users to select drills and place virtual drill markers on detected ground planes using ARCore.
# AR Drill Master – AR Placement App for Android

📱 A minimal Android AR application where users can select a drill from a UI dropdown and place a virtual 3D object (cube or cone) on a real-world horizontal surface using ARCore.

---

## 🎯 Project Objective

The app demonstrates a basic **Augmented Reality drill placement feature** for Android devices.  
It allows the user to:

- Select a drill from a list.
- Start the AR view.
- Tap on a real-world surface (like a floor) to place a virtual marker representing the selected drill.

---

## 🧱 Core Features

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

## 🧑‍💻 About the Author

**Shreya Mangal** – A budding technologist pursuing B.Tech in Information Technology with interests in AR, Web Development, and AI/ML.  
Currently building responsive and interactive experiences using Android ARCore and Three.js/WebXR.  
View my GitHub profile: [github.com/shreya‑4567](https://github.com/shreya‑4567) :contentReference[oaicite:3]{index=3}

---

## 🗂 Project Status

| Phase             | Status         |
|------------------|----------------|
| Drill Selection UI | ✅ Complete     |
| ARCore Integration | ✅ Working      |
| 3D Object Placement | ✅ Cube (static), expandable |
| UI Polish & UX    | 🚧 In Progress  |
| Sceneform 3D Models | 🚧 Yet to implement |

---

## 🎯 Future Work

- Replace placeholder shapes with custom 3D drill models (GLTF, OBJ, or .sfb)
- Enable multiple markers placement and persistence across sessions
- Add drill-specific analytics (e.g., count taps, placement accuracy)
- Polish UI with animations and smoother transitions

---

## 📚 References & Resources

- ARCore Android developer guides and samples
- Sceneform documentation or open-source alternatives
- Android official docs for gesture and tap handling

