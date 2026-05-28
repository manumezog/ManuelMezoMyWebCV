# 📑 Manuel Mezo — Web CV & Portfolio

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)

**Modern, responsive portfolio showcasing professional experience, GenAI projects, computer vision work, and robotics — with a live RAG chat agent embedded directly in the page.**

[🌐 Live Site](https://www.cv.manuelmezo.com) &nbsp;·&nbsp; [💼 LinkedIn](https://www.linkedin.com/in/manuelmezo/) &nbsp;·&nbsp; [💻 GitHub](https://github.com/manumezog) &nbsp;·&nbsp; [📧 Contact](mailto:manumezog@gmail.com)

</div>

---

## What's in here

A self-contained static site — no build tools, no framework. One `index.html` plus dedicated project pages, all deployed on Firebase Hosting.

### Sections (in order)

| Section | Content |
|---|---|
| Hero | Landing, headline, CTA buttons |
| About | Profile photo, bio |
| Experience | Work timeline — Amazon, McKinsey, others |
| Tech | Stack overview: Dev, AI/Cloud, Analytics |
| Education | MSc Aerospace Engineering (UC3M + TU Delft exchange), BSc Aerospace + Mechanical |
| **GenAI Projects** | RAG chat agent, voice CS agent, medical AI, MonumentScout, WMS, and more |
| **Computer Vision** | YOLOv8 fine-tuning, spatial logic, async API, VisionAI |
| **Robotics** | 3D-printed arm + VLA, ROS2 wall follower, self-balancing robots |
| Interests | Interactive photo gallery |
| Contact | Email, LinkedIn, GitHub |

---

## Dedicated project pages

| Page | Project |
|---|---|
| `portfolio-chat-agent-project.html` | RAG chat agent — LangChain, ChromaDB, Gemini, FastAPI |
| `robotic-arm-vla-project.html` | VLA robotic arm — Gemini 1.5 Pro, voice commands |
| `yolo-project.html` | YOLOv8 fine-tuning — custom dataset, Roboflow, 97% mAP |
| `spatial-logic-project.html` | Multi-object tracking — ByteTrack, OpenCV polygon zones |
| `yolo-async-api.html` | YOLOv8 async API — async task queue, Docker, HF Spaces |

---

## Chat agent

The site includes a live **RAG chat agent** (💬 button, bottom-right) that answers questions about Manuel's background using his actual CV and project documents.

- **Backend:** FastAPI + LangChain + ChromaDB + Gemini 2.5 Flash, deployed on HF Spaces
- **Widget:** Vanilla JS/CSS, injected at the bottom of every page
- **Source:** [github.com/manumezog/portfolio-chat-agent](https://github.com/manumezog/portfolio-chat-agent)
- **API:** [manumezog-portfolio-chat-agent.hf.space](https://manumezog-portfolio-chat-agent.hf.space)

---

## Project structure

```
ManuelMezoMyWebCV/
├── index.html                          # Main single-page site
├── portfolio-chat-agent-project.html   # RAG chat agent project page
├── robotic-arm-vla-project.html        # Robotic arm project page
├── yolo-project.html                   # YOLOv8 fine-tuning project page
├── spatial-logic-project.html          # Spatial logic project page
├── yolo-async-api.html                 # YOLOv8 async API project page
│
├── chat-widget.js                      # Chat agent widget (injected on all pages)
├── chat-widget.css                     # Chat widget styles
│
├── firebase.json                       # Firebase Hosting config
├── .firebaserc                         # Firebase project settings
│
├── Manuel_Mezo_Original.png            # Profile photo
├── logo-*.{png,jpg}                    # Company / university logos
├── project-*.{png,jpg}                 # Project card images
├── photo-*.jpg                         # Interests section photos
├── RoboArm.gif                         # Robotic arm demo
├── traffic-real-time-analyzer.mp4      # Traffic analyzer demo
│
└── CV Manuel Mezo for download.pdf     # Downloadable resume
```

---

## Running locally

Open directly in browser:
```
index.html
```

Or with a local server:
```bash
python -m http.server 8000
# or
npx serve .
```

---

## Deployment

Hosted on Firebase Hosting:

```bash
firebase deploy --only hosting
```

---

## Adding a new project card

1. Drop the image into the root folder (`project-myapp.png`)
2. Add a card in the right section of `index.html`:

```html
<div class="project-card">
    <div class="project-img-container">
        <img src="project-myapp.png" alt="My App" class="project-img">
    </div>
    <div class="project-content">
        <h4>🆕 My New Project</h4>
        <p>Description with <b>bold keywords</b>.</p>
        <a href="myapp-project.html">View full project →</a>
    </div>
</div>
```

3. Add a dot to the matching `scroll-indicator` div
4. For a dedicated page, follow the structure of `yolo-project.html`

---

<div align="center">
Built by <a href="https://www.cv.manuelmezo.com">Manuel Mezo</a>
</div>
