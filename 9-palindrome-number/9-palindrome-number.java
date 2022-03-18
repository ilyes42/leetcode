class Solution {
    public boolean isPalindrome(int x) {
        char[] chars = ("" + x).toCharArray();
        int n = chars.length;
        for (int i = 0, j = n - 1; i < j; i++, j--) {
            if (chars[i] != chars[j]) return false;
        }
        return true;
    }
}