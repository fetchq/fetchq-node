// @TODO: validate queue name
const createEnableNotifications = (ctx) => async (name, status = true) => {
  try {
    const q = `SELECT * FROM fetchq.queue_${
      status ? 'enable' : 'disable'
    }_notify('${name}')`;
    const res = await ctx.pool.query(q);
    return res.rows[0];
  } catch (err) {
    ctx.logger.debug(err);
    throw new Error(`[fetchq] queue.enableNotifications() - ${err.message}`);
  }
};

module.exports = {
  createEnableNotifications,
};
