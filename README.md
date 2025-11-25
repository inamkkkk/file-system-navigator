# File System Navigator

A CLI tool to navigate and manage files in your file system.

## Usage

1.  Clone the repository:

    
    git clone <repository_url>
    

2.  Install dependencies:

    
    npm install
    

3.  Run the application:

    
    node server.js <path>
    
    Replace `<path>` with the directory you want to explore.

    For example:

    
    node server.js .
    node server.js /home/user/documents
    

## Functionality

*   Lists files and directories within a given path.

## Error Handling

*   Handles invalid paths.
*   Handles file access errors.

## Future Enhancements

*   Add file creation, deletion, and modification functionalities.
*   Implement a more interactive CLI using libraries like `inquirer`.
