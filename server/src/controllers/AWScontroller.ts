import { FastifyRequest, FastifyReply } from 'fastify';
import { getCpuUsage } from '../config/aws.main';

export const AWSendpoint = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  try {
  const awsRes = await getCpuUsage(request.query);
  reply.send(awsRes);
  } catch(error){
  reply.send(error)
  }
};
