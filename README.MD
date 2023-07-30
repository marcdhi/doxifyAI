# Team Name - LossPerEpoch

## Problem Statement
The lack of an automated solution for converting codebases into documentation poses challenges in terms of time, accuracy, and code comprehension. Documentation is often ignored by developers, especially in fast-building teams. However, this leads to severe technical debt. Since technical documentation is hard and existing tools are limited or expensive, there is a need for comprehensive automatic documentation generation.

## Team Leader Email
For any inquiries or feedback, you can reach out to the Team Leader at hriday.mht@gmail.com.

## A Brief of the Prototype
### UML Diagrams
[Include UML diagrams here to visualize the architecture and design of the prototype.]

### Prototype Description
[Provide a brief description of the prototype, outlining its main features and functionality.]

## Tech Stack
List of technologies used to build the prototype:
- Frontend: Next.js
- Backend: FastAPI

## Step-by-Step Code Execution Instructions
To clone and run the prototype for testing and analysis, follow the instructions below:

### Server Setup Guide

1. Set up a Python virtual environment:
   ```
   python -m venv venv
   ```

2. Activate the virtual environment:
   - For Windows:
     ```
     venv\Scripts\activate
     ```
   - For macOS and Linux:
     ```
     source venv/bin/activate
     ```

3. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

4. To run the server, use the following command:
   ```
   uvicorn main:app --reload
   ```

### Client Frontend Setup(make sure you are in the client directory)

1. Install Node.js dependencies:
   ```
   npm install
   ```

2. Run the development server for the frontend:
   ```
   npm run dev
   ```

## What I Learned
1. **Handling Large Code Files**: We faced a challenge with CodeBERT's inability to process large code files. To overcome this, we devised an algorithm to create tokenizers in a window-like manner, allowing us to maintain context by specifying a window size and overlap region. We then took the average of the embeddings produced to formulate our own embeddings for large files, addressing the issue of context preservation.

2. **Aglomerate Clustering for Context Maintenance**: To keep context across the codebase, we used Agglomerate Clustering. This method grouped "similar" code files that shared semantic meanings and features. Concatenating code files within the same cluster, we sent them to GPT-3.5 using efficient prompt engineering to generate comprehensive documentation.

3. **Persistence and Perseverance**: Despite facing difficulties with the clustering functionality, we persevered and continuously tried different approaches until we made it work. Our persistence paid off, and the successful implementation of clustering significantly improved the prototype's performance.
