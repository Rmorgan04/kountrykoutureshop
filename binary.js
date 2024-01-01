function binarySearch(arr, target) {
    let low = arr[0];
    let high = arr[arr.length - 1];
    while (low < high || high > low) {
        let mid = arr[Math.floor((high + low) / 2)];
        console.log(low, high, mid);

        if (mid < target) {
            low = mid + 1;
            mid = mid = arr[Math.floor((high + low) / 2)];
        } else if (mid > target) {
            high = mid - 1
            mid = mid = arr[Math.floor((high + low) / 2)];
        } else {
            return mid;
        }

    }
     return -1;
    }

    console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], 12));