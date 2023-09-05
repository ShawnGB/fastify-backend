// export const convertPrismaToFastify = (prismaModel: any) => {
//   const typeMappings = {
//     Int: { type: 'integer' },
//     BigInt: { type: 'integer' },
//     Decimal: { type: 'number' },
//     Float: { type: 'number' },
//     String: { type: 'string' },
//     Enum: { type: 'string' },
//     Boolean: { type: 'boolean' },
//     DateTime: { type: 'string', format: 'date-time' },
//     Json: { type: 'object' },
//     // Add more type mappings for other Prisma types
//   };

//   return prismaModel.fields.reduce(
//     (fastifySchema: any, field: any) => {
//       const { name: fieldName, type: fieldType, required } = field;
//       const fastifyType = typeMappings[fieldType];

//       if (fastifyType) {
//         fastifySchema.properties[fieldName] = { ...fastifyType };

//         if (required) {
//           fastifySchema.properties[fieldName].required = true;
//         }
//       }

//       return fastifySchema;
//     },
//     {
//       type: 'object',
//       properties: {},
//     }
//   );
// };
