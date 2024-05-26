import setRateLimit from "express-rate-limit";

// Rate limit middleware
const requestLimitMiddleware = setRateLimit({
     windowMs: 60 * 60 * 1000,
	limit: 1000,
     message: "You have exceeded your 5 requests per minute limit.",
});

export default requestLimitMiddleware;