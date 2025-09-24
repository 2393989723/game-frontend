import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const router = useRouter();
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user) {
    router.push('/login');
    return null;
  }

  return (
    <>
      <Head>
        <title>仪表盘-游戏平台</title>
      </Head>
      <div>
        <h1>欢迎，{user.username}！</h1>
        <p>你的钻石数量：{user.diamonds}</p>
        <button onClick={() => localStorage.removeItem('token') || router.push('/login')}>
          退出登录
        </button>
      </div>
    </>
  );
}
