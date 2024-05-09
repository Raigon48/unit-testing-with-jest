export class StringUtils {

    public toLowercase(arg: String): String {
        if (!arg) {
            throw new Error("Invalid Argument");
        }
        return arg.toLowerCase();
    }
}