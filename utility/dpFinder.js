const dp = (user) => {
    const base64Data = user.dp.toString('base64');
    const contentType = user.content_type || 'image/jpeg';
    return { base64Data, contentType };
};

module.exports = dp;