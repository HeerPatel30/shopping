class ApiFeatures {
    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString;
    }

    search() {
        if (this.queryString.keyword) {
            const regex = new RegExp(this.queryString.keyword, 'i'); // 'i' for case insensitive
            this.query = this.query.find({ name: { $regex: regex } });
        }
        return this; // Return this to allow chaining
    }

    filter() {
        const queryCopy = { ...this.queryString };

        // Removing fields not related to filtering
        const removeFields = ["keyword", "page", "limit"];
        removeFields.forEach(el => delete queryCopy[el]);

        // filtering the price 
        let queryStr = JSON.stringify(queryCopy);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g,key =>`$${key}`)
        this.query = this.query.find(JSON.parse(queryStr));
        return this;
    }
    pagination(resultPerPage) {
        const currentPage = Number(this.queryString.page) || 1;
        const skip = resultPerPage * (currentPage - 1);

        console.log(`Current Page: ${currentPage}`);  // Debugging statement
        console.log(`Skipping: ${skip} documents`);   // Debugging statement

        this.query = this.query.limit(resultPerPage).skip(skip);
        return this;
    }
}

module.exports = ApiFeatures