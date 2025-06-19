const config = {
    GEMINI_API_KEY: process.env.GEMINI_API_KEY || '',
    IMAGEN_API_KEY: process.env.IMAGEN_API_KEY || '',
    GOOGLE_SHEETS: {
        API_KEY: process.env.GOOGLE_SHEETS_API_KEY || '',
        CLIENT_ID: process.env.GOOGLE_SHEETS_CLIENT_ID || '',
        SPREADSHEET_ID: process.env.GOOGLE_SHEETS_SPREADSHEET_ID || '',
    }
};

export default config;