// Google Sheets Integration Test Script
import config from './config.js';

// Test configuration validation
async function testConfigValidation() {
    console.log('Testing configuration validation...');
    try {
        if (!config.GOOGLE_SHEETS.API_KEY) {
            throw new Error('Google Sheets API Key is missing');
        }
        if (!config.GOOGLE_SHEETS.CLIENT_ID) {
            throw new Error('Google Sheets Client ID is missing');
        }
        if (!config.GOOGLE_SHEETS.SPREADSHEET_ID) {
            throw new Error('Google Sheets Spreadsheet ID is missing');
        }
        console.log('✅ Configuration validation passed');
        return true;
    } catch (error) {
        console.error('❌ Configuration validation failed:', error.message);
        return false;
    }
}

// Test Google Sheets API initialization
async function testGoogleSheetsInit() {
    console.log('Testing Google Sheets API initialization...');
    try {
        await new Promise((resolve, reject) => {
            gapi.load('client:auth2', async () => {
                try {
                    await gapi.client.init({
                        apiKey: config.GOOGLE_SHEETS.API_KEY,
                        clientId: config.GOOGLE_SHEETS.CLIENT_ID,
                        discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
                        scope: 'https://www.googleapis.com/auth/spreadsheets'
                    });
                    console.log('✅ Google Sheets API initialized successfully');
                    resolve(true);
                } catch (error) {
                    reject(error);
                }
            });
        });
        return true;
    } catch (error) {
        console.error('❌ Google Sheets API initialization failed:', error.message);
        return false;
    }
}

// Test reading from spreadsheet
async function testSpreadsheetRead() {
    console.log('Testing spreadsheet read...');
    try {
        const response = await gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId: config.GOOGLE_SHEETS.SPREADSHEET_ID,
            range: 'Sheet1!A1:A1'
        });
        console.log('✅ Successfully read from spreadsheet');
        return true;
    } catch (error) {
        console.error('❌ Spreadsheet read failed:', error.message);
        return false;
    }
}

// Test writing to spreadsheet
async function testSpreadsheetWrite() {
    console.log('Testing spreadsheet write...');
    try {
        const testData = [['Test Entry', new Date().toISOString(), 'TEST']];
        const response = await gapi.client.sheets.spreadsheets.values.append({
            spreadsheetId: config.GOOGLE_SHEETS.SPREADSHEET_ID,
            range: 'Sheet1!A:C',
            valueInputOption: 'RAW',
            insertDataOption: 'INSERT_ROWS',
            resource: { values: testData }
        });
        console.log('✅ Successfully wrote to spreadsheet');
        return true;
    } catch (error) {
        console.error('❌ Spreadsheet write failed:', error.message);
        return false;
    }
}

// Run all tests
async function runAllTests() {
    console.log('Starting Google Sheets Integration Tests...');
    console.log('----------------------------------------');

    const configValid = await testConfigValidation();
    if (!configValid) {
        console.log('❌ Tests stopped due to invalid configuration');
        return;
    }

    const initSuccess = await testGoogleSheetsInit();
    if (!initSuccess) {
        console.log('❌ Tests stopped due to initialization failure');
        return;
    }

    await testSpreadsheetRead();
    await testSpreadsheetWrite();

    console.log('----------------------------------------');
    console.log('Tests completed!');
}

// Export the test functions
export { runAllTests };