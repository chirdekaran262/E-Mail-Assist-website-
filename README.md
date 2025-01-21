
# E-Mail-Assist (Website)

E-Mail-Assist is a web-based application designed to assist users in drafting and managing emails. It features a user-friendly interface where users can generate, organize, and send professional emails with ease. This project is built with Java Spring Boot for the backend and React for the frontend.

## Features

- Email generation based on templates
- Customizable email content
- User-friendly interface
- Real-time email preview
- Email management

## Tech Stack

- **Frontend**: React, Vite
- **Backend**: Spring Boot
- **Database**: (Specify if you're using any database like MySQL, PostgreSQL, etc.)
- **Tools**: Maven (for backend), npm (for frontend)

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/chirdekaran262/E-Mail-Assist.git
cd E-Mail-Assist
```

### 2. Backend Setup (Spring Boot)

- Make sure you have **JDK 11** or higher installed.
- Navigate to the `email-writer-sb` folder and use Maven to build the project.

```bash
cd email-writer-sb
mvn clean install
mvn spring-boot:run
```

This will start the Spring Boot server on `localhost:8081`.

### 3. Frontend Setup (React)

- Install the necessary dependencies.

```bash
cd email-writer-react
npm install
```

- Start the React development server.

```bash
npm start
```

The React frontend will be available at `localhost:5173`.

## Usage

1. Open the frontend URL in your browser.
2. Start using the email generation features.
3. Customize email templates and content to suit your needs.
4. Send the email or save it for later use.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

Note: Currently, the project does not have a login/signup functionality. We encourage contributions towards adding a login/signup page for user authentication. If you're interested, please feel free to add this feature and submit a pull request.


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
