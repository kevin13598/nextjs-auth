import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect('mongodb+srv://kev_nextjs:jyCi8FDUQexOto3q@miclusterrestservernode.qbg1s.mongodb.net/auth-demo?retryWrites=true&w=majority')

  return client;
}