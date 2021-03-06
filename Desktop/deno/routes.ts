// @ts-ignore
import { Router} from 'https://deno.land/x/oak/mod.ts';
import {getProducts} from "./products.ts";

const router = new Router()

router.get('/api/v1/products', getProducts);

export default router