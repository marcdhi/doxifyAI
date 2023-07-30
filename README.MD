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
1. **Handling Large Code Files**: We learned that existing models like CodeBERT have limitations when dealing with large code files. To overcome this, we devised our own algorithm to create tokenizers in a window-like manner, enabling us to maintain context and process extensive codebases effectively.

2. **Aglomerate Clustering for Context Maintenance**: We discovered the importance of preserving context while generating code documentation. To achieve this, we implemented Agglomerate Clustering, which grouped similar code files based on semantic meanings and features. This approach ensured that documentation maintained the context of each code cluster, resulting in more meaningful and accurate outputs.

3. **Persistence and Perseverance**: The development process presented challenges, particularly with the clustering functionality. However, we learned the value of persistence and problem-solving. By continuously trying different approaches and not giving up, we successfully resolved the clustering issue and improved the overall performance of the prototype.
