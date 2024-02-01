const zod=require("zod")
const signupScema=zod.object({
    username:zod.string(),
    password:zod.string(),
    firstName:zod.string(),
    lastName:zod.string()
})
const signinScema=zod.object({
    username:zod.string(),
    password:zod.string()
})
const updateBody = zod.object({
	password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
})
module.exports=(signupScema,signinScema,updateBody)