import express from 'express'
import type { Express } from 'express'
import cors from 'cors'

const setupCors = (e: Express): Express => e.use(cors())

const setupRoute = (e: Express): Express => e.get('/', (_req, res, _next) => { res.json({ msg: "hello!" }) })

export const app = [setupCors, setupRoute].reduce((e, midleware) => midleware(e), express())
