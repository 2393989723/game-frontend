import mongoose from 'mongoose';

const MONGODB_URI = '你的MongoDB连接字符串（替换<db_password>）';

if (!MONGODB_URI) {
  throw new Error('请配置MONGODB_URI环境变量');
}

let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts(Mthen((mongoose) => {
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connect;
