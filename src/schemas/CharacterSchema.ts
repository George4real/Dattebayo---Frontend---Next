import { z } from 'zod';

// Schema para el objeto age
const ageSchema = z.object({
  "Part I": z.string().optional(),
  "Part II": z.string().optional(),
  "Academy Graduate": z.string().optional()
});

// Schema para el objeto height
const heightSchema = z.object({
  "Part I": z.string(),
  "Part II": z.string(),
  "Blank Period": z.string().optional()
});

// Schema para el objeto weight
const weightSchema = z.object({
  "Part I": z.string(),
  "Part II": z.string()
});

// Schema para el objeto debut
const debutSchema = z.object({
  manga: z.string().optional(),
  anime: z.string().optional(),
  movie: z.string().optional(),
  game: z.string().optional(),
  appearsIn: z.string()
});

// Schema para el objeto family
const familySchema = z.object({
  father: z.string().optional(),
  mother: z.string().optional(),
  son: z.string().optional(),
  daughter: z.string().optional(),
  wife: z.string().optional(),
  "adoptive son": z.string().optional(),
  godfather: z.string().optional()
});

// Schema para el objeto personal
const personalSchema = z.object({
  birthdate: z.string().optional(),
  sex: z.string().optional(),
  clan: z.union([z.string(), z.array(z.string())]).optional(),
});

// Schema para el objeto ninjaRank
const ninjaRankSchema = z.object({
  "Part I": z.string(),
  Gaiden: z.string()
});

// Schema para el objeto rank
const rankSchema = z.object({
  ninjaRank: ninjaRankSchema,
  ninjaRegistration: z.string()
});

// Schema para el objeto voiceActors
const voiceActorsSchema = z.object({
  japanese: z.array(z.string()),
  english: z.array(z.string())
});

// Schema principal para el personaje
export const characterAPIResponseSchema = z.object({
  id: z.number(),
  name: z.string(),
  images: z.array(z.string().url()),
  debut: debutSchema,
  family: familySchema.optional(),
  jutsu: z.array(z.string()),
  natureType: z.array(z.string()).optional(),
  personal: personalSchema,
});

export const charactersAPIResponseSchema = z.array(characterAPIResponseSchema) 

// Tipo TypeScript inferido del schema
export type Character = z.infer<typeof characterAPIResponseSchema>;
export type Characters = z.infer<typeof charactersAPIResponseSchema>;