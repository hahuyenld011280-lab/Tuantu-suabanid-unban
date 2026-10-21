module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  // Lấy câu chữ tùy thích từ query (ví dụ: ?msg=NoiDung)
  const customMsg = req.query.msg || "Tài khoản đã bị ban do quá bá khí";
  const customTime = req.query.time || "9999 Ngày";
  const customReason = req.query.reason || "Lý Do: Quá đẹp trai!";

  res.status(200).json({
    status: "success",
    code: 200,
    // Các Key tương ứng để đè câu chữ trong hình
    override_strings: {
      "MSG_ACCOUNT_BANNED_PERMANENT": customMsg,
      "BAN_REASON_TEXT": customMsg,
      "BAN_DURATION_PERMANENT": customTime,
      "BAN_REASON_TITLE": customReason
    }
  });
};
