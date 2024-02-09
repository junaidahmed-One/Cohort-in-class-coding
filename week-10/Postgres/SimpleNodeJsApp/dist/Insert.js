"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://junaidcom0065:MCm6UHWh1aAr@ep-mute-resonance-99602592.us-east-2.aws.neon.tech/test?sslmode=require",
});
function insertInTable(username, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const insertQuery = "INSERT INTO USERS (username,email,password) VALUES ($1,$2,$3)";
            const values = [username, email, password];
            const res = yield client.query(insertQuery, values);
            console.log("Insertion success: " + res);
        }
        catch (err) {
            console.error("Error during the insertion:", err);
        }
        finally {
            yield client.end();
        }
    });
}
insertInTable("username2", "user2@example.com", "user_password2").catch(console.error);
