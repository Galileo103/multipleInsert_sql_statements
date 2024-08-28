const fs = require('fs');

/**
 * Converts multiple INSERT SQL statements into a single statement with multiple VALUES.
 */
async function convertMultipleInsertSQLStatements() {
    try {
        // Define the file paths
        const inputFile = 'input.txt';
        const outputFile = 'output.txt';

        // Check if the input file exists
        if (!fs.existsSync(inputFile)) {
            throw new Error('Input file not found: input.txt');
        }

        // Read the entire query from the input file
        const oldQuery = fs.readFileSync(inputFile, 'utf8');

        // Find the position of the 'VALUES' keyword to separate the base query
        const valuesPos = oldQuery.toLowerCase().indexOf('values');
        if (valuesPos === -1) {
            throw new Error('SQL format error: No VALUES keyword found.');
        }

        // Extract the base query (everything before 'VALUES')
        const baseQuery = oldQuery.substring(0, valuesPos).trim();

        // Initialize the result with the base query and 'VALUES'
        let resultQuery = `${baseQuery} VALUES\n`;

        // Split the query by new lines and process each line
        const lines = oldQuery.split('\n');
        for (const line of lines) {
            // Remove 'INSERT INTO ... VALUES' and replace trailing semicolon with a comma
            const valuesPart = line.replace(/INSERT INTO .* VALUES/i, '').replace(/;\s*$/, ',\n');
            if (valuesPart.trim()) {
                resultQuery += valuesPart;
            }
        }

        // Remove the trailing comma and replace it with a semicolon
        resultQuery = resultQuery.replace(/,\s*$/, ';');

        // Write the resulting query to the output file
        fs.writeFileSync(outputFile, resultQuery);

        // Count the number of INSERT statements in the original query
        const insertCount = (oldQuery.match(/INSERT INTO/g) || []).length;

        // Log a success message with the count of INSERT statements
        console.log(`Successfully converted ${insertCount} INSERT statements into one multiple INSERT.`);
    } catch (error) {
        // Log any errors encountered during processing
        console.error(`Error: ${error.message}`);
    }
}

/**
 * Executes the SQL conversion function.
 */
convertMultipleInsertSQLStatements();
